

/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: AddProductToBookingM
// ====================================================

export interface AddProductToBookingM_addProductToBooking_items_product {
  __typename: "Product";
  id: string;
}

export interface AddProductToBookingM_addProductToBooking_items {
  __typename: "Item";
  id: string;
  amount: number;
  product: AddProductToBookingM_addProductToBooking_items_product;
}

export interface AddProductToBookingM_addProductToBooking {
  __typename: "Booking";
  id: string;
  items: AddProductToBookingM_addProductToBooking_items[];
}

export interface AddProductToBookingM {
  addProductToBooking: AddProductToBookingM_addProductToBooking;
}

export interface AddProductToBookingMVariables {
  idProduct: string;
  amount: number;
  idBooking: string;
}


/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: Booking
// ====================================================

export interface Booking_booking_userBooking {
  __typename: "User";
  id: string;
  name: string;
  role: Role;
}

export interface Booking_booking_items_product {
  __typename: "Product";
  id: string;
  name: string;
  price: number;
}

export interface Booking_booking_items {
  __typename: "Item";
  id: string;
  amount: number;
  product: Booking_booking_items_product;
}

export interface Booking_booking {
  __typename: "Booking";
  id: string;
  startDate: any;
  endDate: any | null;
  noWhatsApp: string | null;
  address: string | null;
  message: string | null;
  status: BookingStatus;
  userBooking: Booking_booking_userBooking | null;
  items: Booking_booking_items[];
}

export interface Booking {
  booking: Booking_booking | null;
}

export interface BookingVariables {
  id: string;
}


/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: BookingConnection
// ====================================================

export interface BookingConnection_bookingConnection_pageInfo {
  __typename: "PageInfo";
  hasNextPage: boolean;
  startCursor: string | null;
  endCursor: string | null;
}

export interface BookingConnection_bookingConnection_aggregate {
  __typename: "AggregateBooking";
  count: number;
}

export interface BookingConnection_bookingConnection_edges_node_userBooking {
  __typename: "User";
  id: string;
  name: string;
}

export interface BookingConnection_bookingConnection_edges_node_items_product {
  __typename: "Product";
  id: string;
}

export interface BookingConnection_bookingConnection_edges_node_items {
  __typename: "Item";
  id: string;
  product: BookingConnection_bookingConnection_edges_node_items_product;
}

export interface BookingConnection_bookingConnection_edges_node {
  __typename: "Booking";
  id: string;
  startDate: any;
  endDate: any | null;
  noWhatsApp: string | null;
  address: string | null;
  message: string | null;
  status: BookingStatus;
  userBooking: BookingConnection_bookingConnection_edges_node_userBooking | null;
  items: BookingConnection_bookingConnection_edges_node_items[];
}

export interface BookingConnection_bookingConnection_edges {
  __typename: "BookingEdge";
  node: BookingConnection_bookingConnection_edges_node;
}

export interface BookingConnection_bookingConnection {
  __typename: "BookingConnection";
  pageInfo: BookingConnection_bookingConnection_pageInfo;
  aggregate: BookingConnection_bookingConnection_aggregate;
  edges: (BookingConnection_bookingConnection_edges | null)[];
}

export interface BookingConnection {
  bookingConnection: BookingConnection_bookingConnection | null;
}

export interface BookingConnectionVariables {
  first: number;
  skip: number;
}


/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: BookingQ
// ====================================================

export interface BookingQ_booking_items_product {
  __typename: "Product";
  id: string;
  name: string;
  stock: number;
}

export interface BookingQ_booking_items {
  __typename: "Item";
  id: string;
  amount: number;
  product: BookingQ_booking_items_product;
}

export interface BookingQ_booking {
  __typename: "Booking";
  id: string;
  status: BookingStatus;
  items: BookingQ_booking_items[];
}

export interface BookingQ {
  booking: BookingQ_booking | null;
}

export interface BookingQVariables {
  id: string;
}


/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: CreateBookingM
// ====================================================

export interface CreateBookingM_createBooking_items_product {
  __typename: "Product";
  id: string;
  name: string;
  description: string;
  price: number;
}

export interface CreateBookingM_createBooking_items {
  __typename: "Item";
  id: string;
  amount: number;
  product: CreateBookingM_createBooking_items_product;
}

export interface CreateBookingM_createBooking {
  __typename: "Booking";
  id: string;
  startDate: any;
  endDate: any | null;
  items: CreateBookingM_createBooking_items[];
  message: string | null;
  noWhatsApp: string | null;
  address: string | null;
  status: BookingStatus;
}

export interface CreateBookingM {
  createBooking: CreateBookingM_createBooking;
}

export interface CreateBookingMVariables {
  startDate: any;
  endDate: any;
}


/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: DeleteBookingM
// ====================================================

export interface DeleteBookingM_deleteBooking {
  __typename: "Booking";
  id: string;
}

export interface DeleteBookingM {
  deleteBooking: DeleteBookingM_deleteBooking;
}

export interface DeleteBookingMVariables {
  id: string;
}


/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: DeleteManyBooking
// ====================================================

export interface DeleteManyBooking_deleteManyBooking {
  __typename: "BatchPayload";
  count: any;
}

export interface DeleteManyBooking {
  deleteManyBooking: DeleteManyBooking_deleteManyBooking;
}

export interface DeleteManyBookingVariables {
  ids: string[];
}


/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: RemoveItemFromBookingM
// ====================================================

export interface RemoveItemFromBookingM_removeItemFromBooking_items {
  __typename: "Item";
  id: string;
}

export interface RemoveItemFromBookingM_removeItemFromBooking {
  __typename: "Booking";
  id: string;
  items: RemoveItemFromBookingM_removeItemFromBooking_items[];
}

export interface RemoveItemFromBookingM {
  removeItemFromBooking: RemoveItemFromBookingM_removeItemFromBooking;
}

export interface RemoveItemFromBookingMVariables {
  idBooking: string;
  idItem: string;
}


/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: SearchBookingsByUser
// ====================================================

export interface SearchBookingsByUser_searchBookingsByUser_edges_node_items_product {
  __typename: "Product";
  id: string;
  name: string;
  price: number;
}

export interface SearchBookingsByUser_searchBookingsByUser_edges_node_items {
  __typename: "Item";
  id: string;
  amount: number;
  product: SearchBookingsByUser_searchBookingsByUser_edges_node_items_product;
}

export interface SearchBookingsByUser_searchBookingsByUser_edges_node {
  __typename: "Booking";
  id: string;
  startDate: any;
  endDate: any | null;
  noWhatsApp: string | null;
  address: string | null;
  message: string | null;
  status: BookingStatus;
  items: SearchBookingsByUser_searchBookingsByUser_edges_node_items[];
}

export interface SearchBookingsByUser_searchBookingsByUser_edges {
  __typename: "BookingEdge";
  node: SearchBookingsByUser_searchBookingsByUser_edges_node;
}

export interface SearchBookingsByUser_searchBookingsByUser_aggregate {
  __typename: "AggregateBooking";
  count: number;
}

export interface SearchBookingsByUser_searchBookingsByUser {
  __typename: "BookingConnection";
  edges: (SearchBookingsByUser_searchBookingsByUser_edges | null)[];
  aggregate: SearchBookingsByUser_searchBookingsByUser_aggregate;
}

export interface SearchBookingsByUser {
  searchBookingsByUser: SearchBookingsByUser_searchBookingsByUser | null;
}

export interface SearchBookingsByUserVariables {
  idUser: string;
  first: number;
  skip: number;
}


/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: SendBookingM
// ====================================================

export interface SendBookingM_sendBooking_items_product {
  __typename: "Product";
  id: string;
  name: string;
  description: string;
  price: number;
}

export interface SendBookingM_sendBooking_items {
  __typename: "Item";
  id: string;
  amount: number;
  product: SendBookingM_sendBooking_items_product;
}

export interface SendBookingM_sendBooking {
  __typename: "Booking";
  id: string;
  startDate: any;
  endDate: any | null;
  items: SendBookingM_sendBooking_items[];
  message: string | null;
  noWhatsApp: string | null;
  address: string | null;
  status: BookingStatus;
}

export interface SendBookingM {
  sendBooking: SendBookingM_sendBooking;
}

export interface SendBookingMVariables {
  idBooking: string;
  address: string;
  noWhatsApp: string;
  message?: string | null;
}


/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: UpdateStatusBooking
// ====================================================

export interface UpdateStatusBooking_updateStatusBooking_userBooking {
  __typename: "User";
  id: string;
  name: string;
  role: Role;
}

export interface UpdateStatusBooking_updateStatusBooking_items_product {
  __typename: "Product";
  id: string;
  name: string;
  price: number;
}

export interface UpdateStatusBooking_updateStatusBooking_items {
  __typename: "Item";
  id: string;
  amount: number;
  product: UpdateStatusBooking_updateStatusBooking_items_product;
}

export interface UpdateStatusBooking_updateStatusBooking {
  __typename: "Booking";
  id: string;
  startDate: any;
  endDate: any | null;
  noWhatsApp: string | null;
  address: string | null;
  message: string | null;
  status: BookingStatus;
  userBooking: UpdateStatusBooking_updateStatusBooking_userBooking | null;
  items: UpdateStatusBooking_updateStatusBooking_items[];
}

export interface UpdateStatusBooking {
  updateStatusBooking: UpdateStatusBooking_updateStatusBooking;
}

export interface UpdateStatusBookingVariables {
  status: BookingStatus;
  idBooking: string;
}


/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: CreateProduct
// ====================================================

export interface CreateProduct_createProduct_photo {
  __typename: "ProductPhoto";
  id: string;
  key: string;
  url: string;
}

export interface CreateProduct_createProduct {
  __typename: "Product";
  id: string;
  name: string;
  stock: number;
  price: number;
  description: string;
  photo: CreateProduct_createProduct_photo | null;
  tag: ProductTag;
}

export interface CreateProduct {
  createProduct: CreateProduct_createProduct;
}

export interface CreateProductVariables {
  name: string;
  stock: number;
  price: number;
  description: string;
  tag: string;
  idPhotoProduct?: string | null;
}


/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: DeleteManyProduct
// ====================================================

export interface DeleteManyProduct_deleteManyProduct {
  __typename: "BatchPayload";
  count: any;
}

export interface DeleteManyProduct {
  deleteManyProduct: DeleteManyProduct_deleteManyProduct;
}

export interface DeleteManyProductVariables {
  ids: string[];
}


/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: DeleteProduct
// ====================================================

export interface DeleteProduct_deleteProduct {
  __typename: "Product";
  id: string;
}

export interface DeleteProduct {
  deleteProduct: DeleteProduct_deleteProduct;
}

export interface DeleteProductVariables {
  id: string;
}


/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: DeleteProductPhoto
// ====================================================

export interface DeleteProductPhoto_deleteProductPhoto {
  __typename: "OnDeleteResponse";
  success: boolean;
}

export interface DeleteProductPhoto {
  deleteProductPhoto: DeleteProductPhoto_deleteProductPhoto;
}

export interface DeleteProductPhotoVariables {
  idPhoto: string;
  key: string;
}


/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: FilterProductByDateGivenQ
// ====================================================

export interface FilterProductByDateGivenQ_filterProductByDateGiven_edges_node_photo {
  __typename: "ProductPhoto";
  id: string;
  key: string;
  url: string;
}

export interface FilterProductByDateGivenQ_filterProductByDateGiven_edges_node {
  __typename: "Product";
  id: string;
  name: string;
  tag: ProductTag;
  photo: FilterProductByDateGivenQ_filterProductByDateGiven_edges_node_photo | null;
  description: string;
  price: number;
  stock: number;
}

export interface FilterProductByDateGivenQ_filterProductByDateGiven_edges {
  __typename: "ProductEdge";
  node: FilterProductByDateGivenQ_filterProductByDateGiven_edges_node;
}

export interface FilterProductByDateGivenQ_filterProductByDateGiven_aggregate {
  __typename: "AggregateProduct";
  count: number;
}

export interface FilterProductByDateGivenQ_filterProductByDateGiven {
  __typename: "ProductsConnection";
  edges: (FilterProductByDateGivenQ_filterProductByDateGiven_edges | null)[];
  aggregate: FilterProductByDateGivenQ_filterProductByDateGiven_aggregate;
}

export interface FilterProductByDateGivenQ {
  filterProductByDateGiven: FilterProductByDateGivenQ_filterProductByDateGiven | null;
}

export interface FilterProductByDateGivenQVariables {
  startDate: any;
  endDate: any;
  first: number;
  skip: number;
  tag: string;
}


/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: Product
// ====================================================

export interface Product_product_photo {
  __typename: "ProductPhoto";
  id: string;
  key: string;
  url: string;
}

export interface Product_product {
  __typename: "Product";
  id: string;
  name: string;
  stock: number;
  description: string;
  price: number;
  tag: ProductTag;
  photo: Product_product_photo | null;
}

export interface Product {
  product: Product_product;
}

export interface ProductVariables {
  id: string;
}


/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: ProductsConnectionQ
// ====================================================

export interface ProductsConnectionQ_productsConnection_edges_node_photo {
  __typename: "ProductPhoto";
  id: string;
  key: string;
  url: string;
}

export interface ProductsConnectionQ_productsConnection_edges_node {
  __typename: "Product";
  id: string;
  name: string;
  photo: ProductsConnectionQ_productsConnection_edges_node_photo | null;
  description: string;
  stock: number;
  price: number;
}

export interface ProductsConnectionQ_productsConnection_edges {
  __typename: "ProductEdge";
  node: ProductsConnectionQ_productsConnection_edges_node;
}

export interface ProductsConnectionQ_productsConnection_aggregate {
  __typename: "AggregateProduct";
  count: number;
}

export interface ProductsConnectionQ_productsConnection {
  __typename: "ProductsConnection";
  edges: (ProductsConnectionQ_productsConnection_edges | null)[];
  aggregate: ProductsConnectionQ_productsConnection_aggregate;
}

export interface ProductsConnectionQ {
  productsConnection: ProductsConnectionQ_productsConnection | null;
}

export interface ProductsConnectionQVariables {
  first: number;
  skip: number;
  tag: string;
}


/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: UpdateProduct
// ====================================================

export interface UpdateProduct_updateProduct_photo {
  __typename: "ProductPhoto";
  id: string;
  key: string;
  url: string;
}

export interface UpdateProduct_updateProduct {
  __typename: "Product";
  id: string;
  name: string;
  stock: number;
  price: number;
  description: string;
  photo: UpdateProduct_updateProduct_photo | null;
  tag: ProductTag;
}

export interface UpdateProduct {
  updateProduct: UpdateProduct_updateProduct;
}

export interface UpdateProductVariables {
  name: string;
  stock: number;
  price: number;
  description: string;
  tag: ProductTag;
  whereId: string;
  idPhotoProduct?: string | null;
}


/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: UploadProductPhotoM
// ====================================================

export interface UploadProductPhotoM_uploadProductPhoto {
  __typename: "ProductPhoto";
  id: string;
  key: string;
  url: string;
}

export interface UploadProductPhotoM {
  uploadProductPhoto: UploadProductPhotoM_uploadProductPhoto;
}

export interface UploadProductPhotoMVariables {
  file: any;
}


/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: DeleteManyUser
// ====================================================

export interface DeleteManyUser_deleteManyUser {
  __typename: "BatchPayload";
  count: any;
}

export interface DeleteManyUser {
  deleteManyUser: DeleteManyUser_deleteManyUser;
}

export interface DeleteManyUserVariables {
  ids: string[];
}


/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: DeleteUser
// ====================================================

export interface DeleteUser_deleteUser {
  __typename: "User";
  id: string;
}

export interface DeleteUser {
  deleteUser: DeleteUser_deleteUser;
}

export interface DeleteUserVariables {
  id: string;
}


/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: DeleteUserPhoto
// ====================================================

export interface DeleteUserPhoto_deleteUserPhoto {
  __typename: "UserPhoto";
  id: string;
  key: string;
  filename: string;
  mimetype: string;
  encoding: string;
  url: string;
}

export interface DeleteUserPhoto {
  deleteUserPhoto: DeleteUserPhoto_deleteUserPhoto;
}

export interface DeleteUserPhotoVariables {
  idPhoto: string;
  key: string;
}


/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: LoginM
// ====================================================

export interface LoginM_login_user {
  __typename: "User";
  id: string;
  name: string;
  email: string;
  role: Role;
}

export interface LoginM_login {
  __typename: "AuthPayload";
  token: string;
  user: LoginM_login_user;
}

export interface LoginM {
  login: LoginM_login;
}

export interface LoginMVariables {
  email: string;
  password: string;
}


/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: MeQ
// ====================================================

export interface MeQ_me_photo {
  __typename: "UserPhoto";
  id: string;
  key: string;
  url: string;
}

export interface MeQ_me_bookings_items_product {
  __typename: "Product";
  id: string;
  name: string;
  description: string;
  stock: number;
  price: number;
}

export interface MeQ_me_bookings_items {
  __typename: "Item";
  id: string;
  amount: number;
  product: MeQ_me_bookings_items_product;
}

export interface MeQ_me_bookings {
  __typename: "Booking";
  id: string;
  startDate: any;
  endDate: any | null;
  noWhatsApp: string | null;
  address: string | null;
  message: string | null;
  items: MeQ_me_bookings_items[];
  status: BookingStatus;
}

export interface MeQ_me {
  __typename: "User";
  name: string;
  email: string;
  role: Role;
  id: string;
  photo: MeQ_me_photo | null;
  bookings: MeQ_me_bookings[];
}

export interface MeQ {
  me: MeQ_me;
}


/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: singUpM
// ====================================================

export interface singUpM_signup_user {
  __typename: "User";
  id: string;
  name: string;
  email: string;
  role: Role;
}

export interface singUpM_signup {
  __typename: "AuthPayload";
  token: string;
  user: singUpM_signup_user;
}

export interface singUpM {
  signup: singUpM_signup;
}

export interface singUpMVariables {
  email: string;
  password: string;
  name: string;
}


/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: UpdateUser
// ====================================================

export interface UpdateUser_updateUser {
  __typename: "User";
  id: string;
}

export interface UpdateUser {
  updateUser: UpdateUser_updateUser;
}

export interface UpdateUserVariables {
  name: string;
  email: string;
  password?: string | null;
  whereId: string;
}


/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: UploadUserPhoto
// ====================================================

export interface UploadUserPhoto_uploadUserPhoto {
  __typename: "UserPhoto";
  id: string;
  key: string;
  filename: string;
  mimetype: string;
  encoding: string;
  url: string;
}

export interface UploadUserPhoto {
  uploadUserPhoto: UploadUserPhoto_uploadUserPhoto;
}

export interface UploadUserPhotoVariables {
  file?: any | null;
}


/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: User
// ====================================================

export interface User_user_photo {
  __typename: "UserPhoto";
  id: string;
  key: string;
  url: string;
}

export interface User_user {
  __typename: "User";
  id: string;
  name: string;
  email: string;
  photo: User_user_photo | null;
}

export interface User {
  user: User_user;
}

export interface UserVariables {
  id: string;
}


/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: UsersConnection
// ====================================================

export interface UsersConnection_usersConnection_aggregate {
  __typename: "AggregateUser";
  count: number;
}

export interface UsersConnection_usersConnection_edges_node_photo {
  __typename: "UserPhoto";
  id: string;
  key: string;
  url: string;
}

export interface UsersConnection_usersConnection_edges_node {
  __typename: "User";
  id: string;
  name: string;
  email: string;
  photo: UsersConnection_usersConnection_edges_node_photo | null;
}

export interface UsersConnection_usersConnection_edges {
  __typename: "UserEdge";
  node: UsersConnection_usersConnection_edges_node;
}

export interface UsersConnection_usersConnection {
  __typename: "UsersConnection";
  aggregate: UsersConnection_usersConnection_aggregate;
  edges: (UsersConnection_usersConnection_edges | null)[];
}

export interface UsersConnection {
  usersConnection: UsersConnection_usersConnection | null;
}

export interface UsersConnectionVariables {
  first: number;
  skip: number;
  role: Role;
}


/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: BookingMenuFragment
// ====================================================

export interface BookingMenuFragment_bookings_items_product {
  __typename: "Product";
  id: string;
  name: string;
  description: string;
  stock: number;
  price: number;
}

export interface BookingMenuFragment_bookings_items {
  __typename: "Item";
  id: string;
  amount: number;
  product: BookingMenuFragment_bookings_items_product;
}

export interface BookingMenuFragment_bookings {
  __typename: "Booking";
  id: string;
  startDate: any;
  endDate: any | null;
  noWhatsApp: string | null;
  address: string | null;
  message: string | null;
  items: BookingMenuFragment_bookings_items[];
  status: BookingStatus;
}

export interface BookingMenuFragment {
  __typename: "User";
  bookings: BookingMenuFragment_bookings[];
}


/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: DataUserForProductFragment
// ====================================================

export interface DataUserForProductFragment_bookings {
  __typename: "Booking";
  id: string;
  startDate: any;
  endDate: any | null;
}

export interface DataUserForProductFragment {
  __typename: "User";
  bookings: DataUserForProductFragment_bookings[];
}


/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: LoginMenuFragment
// ====================================================

export interface LoginMenuFragment_photo {
  __typename: "UserPhoto";
  id: string;
  key: string;
  url: string;
}

export interface LoginMenuFragment {
  __typename: "User";
  id: string;
  name: string;
  photo: LoginMenuFragment_photo | null;
}

/* tslint:disable */
// This file was automatically generated and should not be edited.

//==============================================================
// START Enums and Input Objects
//==============================================================

export enum BookingStatus {
  CREATED = "CREATED",
  PROCCESS = "PROCCESS",
  SEND = "SEND",
  SUCCESS = "SUCCESS",
}

export enum Role {
  ADMIN = "ADMIN",
  CUSTOMER = "CUSTOMER",
}

export enum ProductTag {
  BARANG = "BARANG",
  PAKETWEDDING = "PAKETWEDDING",
}

//==============================================================
// END Enums and Input Objects
//==============================================================