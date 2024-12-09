ALTER TABLE "players" ADD CONSTRAINT "players_user_id_unique" UNIQUE("user_id");--> statement-breakpoint
ALTER TABLE "players" ADD CONSTRAINT "players_team_id_unique" UNIQUE("team_id");