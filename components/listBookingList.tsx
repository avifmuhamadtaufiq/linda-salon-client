import { SFC } from 'react'
import { List, Row } from 'antd'
import { 
  SearchBookingsByUser_searchBookingsByUser_edges_node as NodeItemsType,
  SearchBookingsByUser_searchBookingsByUser_edges_node_items as NodeItemType,
} from 'types/schema-types'
import toRupiah from 'utilities/toRupiah'

type Props = {
  dataItem: NodeItemsType['items']
  totalPrice: number
}

const ListBookingList: SFC<Props> = ({ dataItem, totalPrice }) => (
  <List
    size="small"
    header="Items"
    bordered
    className="list-booking"
    dataSource={dataItem}
    renderItem={ (item : NodeItemType) =>
      <List.Item
        key={item.id}
      >
        <List.Item.Meta
          title={`${item.amount} x ${item.product.name}`}
        />
        <div>
          {toRupiah(item.amount * item.product.price)}
        </div>
      </List.Item>
    }
    footer={
      <Row
        type="flex"
        justify="space-between"
      >
        <span><b>total</b></span>
        <span><b>{`${toRupiah(totalPrice)}`}</b></span>
      </Row>
    }
  />
)

export default ListBookingList