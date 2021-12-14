export const GET_LIST = `
query MyQuery($list_id: uuid = "") {
  list(where: {id: {_eq: $list_id}}) {
    title
    date_modified
    id
    items {
      image_url
      item_url
      name
      price
      date_created
      id
    }
    user {
      username
      profile_pic_url
      id
    }
  }
}

`;
// {
//   "list_id": "3cfb100a-c924-4286-b6e2-87d598c1d7df"
// }
