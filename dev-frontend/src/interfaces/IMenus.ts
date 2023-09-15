interface Menus {
  id: BigInteger;
  label: string;
  icon: string;
  route: string;
  visible_to_permissions: Array<string>;
  parent_id: BigInteger;
}

export default Menus;
