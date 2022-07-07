select "customers"."firstName",
       "customers"."lastName"
  from "inventory"
  join "films" using ("filmId")
  join "rentals" using ("inventoryId")
  join "customers" using ("customerId")
 where "title" = 'Magic Mallrats';
