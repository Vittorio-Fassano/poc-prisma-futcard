CREATE DATABASE futcard;

CREATE TABLE "results" (
    "id" SERIAL PRIMARY KEY,
    "text" TEXT NOT NULL,
    "createdAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT NOW()
);

CREATE TABLE "stadiums" (
    "id" SERIAL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "createdAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT NOW()
);

CREATE TABLE "games" (
    "id" SERIAL PRIMARY KEY,
    "teams" TEXT NOT NULL,
    "result" INTEGER NOT NULL REFERENCES "results"("id"),
    "stadium" INTEGER NOT NULL REFERENCES "stadiums"("id"),
    "createdAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT NOW()
);