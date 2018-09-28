import React, { SFC } from 'react' 
import checkLoggedIn from 'lib/checkLoggedIn'
import { NextContextNewContext } from 'lib/withApollo'
import { MeQ } from 'types/schema-types'
import { UserLayoutWithProvider, UserLayoutConsumer } from 'layout/layoutUser'
import { Layout } from 'antd'
import '../styles/index.less'

type Props = {
  loggedInUser: MeQ,
}

const Item: SFC<{ src: string }> = ({ src }) => (
  <div className="item">
		<article className="boxed">
			<img src={src} alt="" />
		</article>
	</div>
)

class Index extends React.Component<Props> {
  static async getInitialProps (context: NextContextNewContext) {
    const { loggedInUser } = await checkLoggedIn(context.apolloClient)
    return {
      loggedInUser
    }
  }

  private renderItem = () => {
    let dataItem = [] as string[]
    for (let i = 1; i <= 60; i++) {
      dataItem.push(require(`../images/${i}.jpg`))
    }
    return dataItem
  }

  render() {
    const { loggedInUser } = this.props 
    return (
      <>
      <UserLayoutWithProvider
        idUser={loggedInUser && loggedInUser.me ? loggedInUser.me.id : undefined}
      >
        <UserLayoutConsumer>
          {( appProvider ) => {
            if ( appProvider ) {
              return (
                <Layout.Content style={{ marginTop: 110 }}>
                  <div className="wrapper">
			              <div className="masonry">
                      {this.renderItem().map((val, i) => (
                        <Item 
                          key={i}
                          src={val}
                        />
                      ))}
                    </div>
                  </div>
                </Layout.Content>
              )
            }
          }}
        </UserLayoutConsumer>
      </UserLayoutWithProvider>
      </>
    )
  }
}

export default Index

 