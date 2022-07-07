select "genres"."name",
  count("genreId") as "totalAppearances"
  from "castMembers"
  join "actors" using ("actorId")
  join "filmGenre" using ("filmId")
  join "genres" using ("genreId")
   where "actors"."firstName" = 'Lisa' AND "actors"."lastName" = 'Monroe'
group by "genres"."name";
