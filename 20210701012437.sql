/*
PostgreSQL Backup
Database: prueba_asesoftware/sys
Backup Time: 2021-07-01 01:24:40
*/

DROP SEQUENCE IF EXISTS "sys"."comercios_id_seq";
DROP SEQUENCE IF EXISTS "sys"."servicios_id_seq";
DROP SEQUENCE IF EXISTS "sys"."turnos_id_seq";
DROP TABLE IF EXISTS "sys"."Comercios";
DROP TABLE IF EXISTS "sys"."Servicios";
DROP TABLE IF EXISTS "sys"."Turnos";
CREATE SEQUENCE "comercios_id_seq" 
INCREMENT 1
MINVALUE  1
MAXVALUE 2147483647
START 1
CACHE 1;
CREATE SEQUENCE "servicios_id_seq" 
INCREMENT 1
MINVALUE  1
MAXVALUE 2147483647
START 1
CACHE 1;
CREATE SEQUENCE "turnos_id_seq" 
INCREMENT 1
MINVALUE  1
MAXVALUE 2147483647
START 1
CACHE 1;
CREATE TABLE "Comercios" (
  "id" int4 NOT NULL DEFAULT nextval('sys.comercios_id_seq'::regclass),
  "nom_comercios" varchar(255) COLLATE "pg_catalog"."default",
  "aforo_maximo" int4,
  "createdAt" time(6) DEFAULT CURRENT_TIMESTAMP,
  "updatedAt" timestamp(6) DEFAULT CURRENT_TIMESTAMP
)
;
ALTER TABLE "Comercios" OWNER TO "postgres";
CREATE TABLE "Servicios" (
  "id" int4 NOT NULL DEFAULT nextval('sys.servicios_id_seq'::regclass),
  "id_comercio" int4,
  "nom_servicio" varchar(255) COLLATE "pg_catalog"."default",
  "hora_apertura" time(6),
  "hora_cierre" time(6),
  "duracion" int4,
  "createdAt" timestamp(6) DEFAULT CURRENT_TIMESTAMP,
  "updatedAt" timestamp(6) DEFAULT CURRENT_TIMESTAMP
)
;
ALTER TABLE "Servicios" OWNER TO "postgres";
CREATE TABLE "Turnos" (
  "id" int4 NOT NULL DEFAULT nextval('sys.turnos_id_seq'::regclass),
  "id_servicio" int4,
  "fecha_turno" date,
  "hora_inicio" time(6),
  "hora_fin" time(6),
  "estado" int4,
  "createdAt" timestamp(6) DEFAULT CURRENT_TIMESTAMP,
  "updatedAt" timestamp(6) DEFAULT CURRENT_TIMESTAMP
)
;
ALTER TABLE "Turnos" OWNER TO "postgres";
BEGIN;
LOCK TABLE "sys"."Comercios" IN SHARE MODE;
DELETE FROM "sys"."Comercios";
INSERT INTO "sys"."Comercios" ("id","nom_comercios","aforo_maximo","createdAt","updatedAt") VALUES (1, 'Comercio 1', 20, '20:16:37.58267', '2021-06-28 20:16:37.58267');
COMMIT;
BEGIN;
LOCK TABLE "sys"."Servicios" IN SHARE MODE;
DELETE FROM "sys"."Servicios";
INSERT INTO "sys"."Servicios" ("id","id_comercio","nom_servicio","hora_apertura","hora_cierre","duracion","createdAt","updatedAt") VALUES (1, 1, 'Servicio 1', '08:00:00', '18:00:00', 10, '2021-06-28 21:29:56.98248', '2021-06-28 21:29:56.98248'),(2, 1, 'Servicio 2', '09:00:00', '19:00:00', 20, '2021-06-28 21:29:56.98248', '2021-06-28 21:29:56.98248');
COMMIT;
BEGIN;
LOCK TABLE "sys"."Turnos" IN SHARE MODE;
DELETE FROM "sys"."Turnos";
INSERT INTO "sys"."Turnos" ("id","id_servicio","fecha_turno","hora_inicio","hora_fin","estado","createdAt","updatedAt") VALUES (116, 1, '2021-06-29', '08:00:00', '08:10:00', 1, '2021-07-01 06:16:02.06', '2021-07-01 06:16:02.06'),(117, 1, '2021-06-30', '08:00:00', '08:10:00', 1, '2021-07-01 06:16:02.094', '2021-07-01 06:16:02.094'),(118, 1, '2021-07-01', '08:00:00', '08:10:00', 1, '2021-07-01 06:16:02.138', '2021-07-01 06:16:02.138'),(119, 1, '2021-07-02', '08:00:00', '08:10:00', 1, '2021-07-01 06:16:02.16', '2021-07-01 06:16:02.16'),(120, 1, '2021-07-03', '08:00:00', '08:10:00', 1, '2021-07-01 06:16:02.168', '2021-07-01 06:16:02.168'),(121, 1, '2021-07-04', '08:00:00', '08:10:00', 1, '2021-07-01 06:16:02.177', '2021-07-01 06:16:02.177'),(122, 1, '2021-07-05', '08:00:00', '08:10:00', 1, '2021-07-01 06:16:02.183', '2021-07-01 06:16:02.183'),(123, 1, '2021-07-06', '08:00:00', '08:10:00', 1, '2021-07-01 06:16:02.193', '2021-07-01 06:16:02.193'),(124, 1, '2021-07-07', '08:00:00', '08:10:00', 1, '2021-07-01 06:16:02.205', '2021-07-01 06:16:02.205'),(125, 1, '2021-07-08', '08:00:00', '08:10:00', 1, '2021-07-01 06:16:02.214', '2021-07-01 06:16:02.214'),(126, 1, '2021-07-09', '08:00:00', '08:10:00', 1, '2021-07-01 06:16:02.224', '2021-07-01 06:16:02.224'),(127, 1, '2021-07-10', '08:00:00', '08:10:00', 1, '2021-07-01 06:16:02.231', '2021-07-01 06:16:02.231'),(128, 1, '2021-06-29', '08:11:00', '08:21:00', 1, '2021-07-01 06:16:17.712', '2021-07-01 06:16:17.712'),(129, 1, '2021-06-30', '08:11:00', '08:21:00', 1, '2021-07-01 06:16:17.719', '2021-07-01 06:16:17.719'),(130, 1, '2021-07-01', '08:11:00', '08:21:00', 1, '2021-07-01 06:16:17.726', '2021-07-01 06:16:17.726'),(131, 1, '2021-07-02', '08:11:00', '08:21:00', 1, '2021-07-01 06:16:17.732', '2021-07-01 06:16:17.732'),(132, 1, '2021-07-03', '08:11:00', '08:21:00', 1, '2021-07-01 06:16:17.738', '2021-07-01 06:16:17.738'),(133, 1, '2021-07-04', '08:11:00', '08:21:00', 1, '2021-07-01 06:16:17.744', '2021-07-01 06:16:17.744'),(134, 1, '2021-07-05', '08:11:00', '08:21:00', 1, '2021-07-01 06:16:17.751', '2021-07-01 06:16:17.751'),(135, 1, '2021-07-06', '08:11:00', '08:21:00', 1, '2021-07-01 06:16:17.759', '2021-07-01 06:16:17.759'),(136, 1, '2021-07-07', '08:11:00', '08:21:00', 1, '2021-07-01 06:16:17.764', '2021-07-01 06:16:17.764'),(137, 1, '2021-07-08', '08:11:00', '08:21:00', 1, '2021-07-01 06:16:17.77', '2021-07-01 06:16:17.77'),(138, 1, '2021-07-09', '08:11:00', '08:21:00', 1, '2021-07-01 06:16:17.777', '2021-07-01 06:16:17.777'),(139, 1, '2021-07-10', '08:11:00', '08:21:00', 1, '2021-07-01 06:16:17.786', '2021-07-01 06:16:17.786');
COMMIT;
ALTER TABLE "Comercios" ADD CONSTRAINT "comercios_pkey" PRIMARY KEY ("id");
ALTER TABLE "Servicios" ADD CONSTRAINT "servicios_pkey" PRIMARY KEY ("id");
ALTER TABLE "Turnos" ADD CONSTRAINT "turnos_pkey" PRIMARY KEY ("id");
ALTER TABLE "Servicios" ADD CONSTRAINT "servicios_id_comercio_fkey" FOREIGN KEY ("id_comercio") REFERENCES "sys"."Comercios" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION;
ALTER SEQUENCE "comercios_id_seq"
OWNED BY "Comercios"."id";
SELECT setval('"comercios_id_seq"', 2, true);
ALTER SEQUENCE "comercios_id_seq" OWNER TO "postgres";
ALTER SEQUENCE "servicios_id_seq"
OWNED BY "Servicios"."id";
SELECT setval('"servicios_id_seq"', 3, true);
ALTER SEQUENCE "servicios_id_seq" OWNER TO "postgres";
ALTER SEQUENCE "turnos_id_seq"
OWNED BY "Turnos"."id";
SELECT setval('"turnos_id_seq"', 140, true);
ALTER SEQUENCE "turnos_id_seq" OWNER TO "postgres";
