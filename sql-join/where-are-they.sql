select "addresses"."line1",
       "cities"."name" as "cityName",
       "addresses"."district",
       "countries"."name" as "countryName"
  from "cities"
  join "addresses" using ("cityId")
  join "countries" using ("countryId");
