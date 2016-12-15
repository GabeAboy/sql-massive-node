--
-- __create_product__
--
-- This query will need to take the 4 parameters
-- defined in the schema and insert a record into the database.
insert into products
  (Name,Description,Price,Imageurl)
  values($1,$2,$3,$4)
  -- returning us_state, injury_id, cause_id
