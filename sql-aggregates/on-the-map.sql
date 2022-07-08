     select "countries"."name",
count(*) as "cityNumbers"
       from "countries"
       join "cities" using ("countryId")
   group by "countries"."name";
