select *
  from "customers"
  join "payments" using ("customerId")
  order by "amount" desc
  limit 10;
