--
-- __update_product__
--
-- This query will take in an id and a new description.
-- Find the product with the id and update it's description with the new description.
update products
  set description=$2
  where $1 = products.ID;
