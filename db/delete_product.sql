-- __delete_product__
--
-- This query will take in an id.  Find and delete the product with the id.
--
delete from products
  where products.id = $1;
