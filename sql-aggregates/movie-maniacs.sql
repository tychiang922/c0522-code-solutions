    select "customers"."lastName",
           "customers"."firstName",
      sum("payments"."amount") as "totalPayment"
      from "customers"
      join "payments" using ("customerId")
  group by "customers"."lastName",
           "customers"."firstName"
  order by "totalPayment" desc;
