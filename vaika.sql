-- This script was generated by a beta version of the ERD tool in pgAdmin 4.
-- Please log an issue at https://redmine.postgresql.org/projects/pgadmin4/issues/new if you find any bugs, including reproduction steps.
BEGIN;



CREATE TABLE IF NOT EXISTS public.annonce
(
    idannonce integer NOT NULL DEFAULT nextval('annonce_idannonce_seq'::regclass),
    description character varying COLLATE pg_catalog."default",
    isvalid boolean,
    idcategorie integer NOT NULL DEFAULT nextval('annonce_idcategorie_seq'::regclass),
    idmodele integer NOT NULL DEFAULT nextval('annonce_idmodele_seq'::regclass),
    id_utilisateur integer NOT NULL DEFAULT nextval('annonce_id_utilisateur_seq'::regclass),
    CONSTRAINT pk_annonce PRIMARY KEY (idannonce)
)
WITH (
    OIDS = FALSE
);

CREATE TABLE IF NOT EXISTS public.categorie
(
    idcategorie integer NOT NULL DEFAULT nextval('categorie_idcategorie_seq'::regclass),
    nomcategorie character varying(20) COLLATE pg_catalog."default",
    CONSTRAINT pk_categorie PRIMARY KEY (idcategorie)
)
WITH (
    OIDS = FALSE
);

CREATE TABLE IF NOT EXISTS public.marques
(
    idmarque integer NOT NULL DEFAULT nextval('marques_idmarque_seq'::regclass),
    marque character varying(20) COLLATE pg_catalog."default",
    CONSTRAINT pk_marques PRIMARY KEY (idmarque)
)
WITH (
    OIDS = FALSE
);

CREATE TABLE IF NOT EXISTS public.modele
(
    idmodele integer NOT NULL DEFAULT nextval('modele_idmodele_seq'::regclass),
    modele character varying(20) COLLATE pg_catalog."default",
    motorisation character varying(20) COLLATE pg_catalog."default",
    puissance character varying(20) COLLATE pg_catalog."default",
    annee character varying(20) COLLATE pg_catalog."default",
    kilometrage character varying(20) COLLATE pg_catalog."default",
    boitedevitesse character varying COLLATE pg_catalog."default",
    energie character varying COLLATE pg_catalog."default",
    prix character varying COLLATE pg_catalog."default",
    isvendu boolean,
    idmarque integer NOT NULL DEFAULT nextval('modele_idmarque_seq'::regclass),
    CONSTRAINT pk_modele PRIMARY KEY (idmodele)
)
WITH (
    OIDS = FALSE
);

CREATE TABLE IF NOT EXISTS public.utilisateurs
(
    id_utilisateur integer NOT NULL DEFAULT nextval('utilisateurs_id_utilisateur_seq'::regclass),
    nom character varying COLLATE pg_catalog."default",
    email character varying COLLATE pg_catalog."default",
    password character varying COLLATE pg_catalog."default",
        isAdmin boolean NOT NULL,
    CONSTRAINT pk_utilisateurs PRIMARY KEY (id_utilisateur)
)
WITH (
    OIDS = FALSE
);

ALTER TABLE IF EXISTS public.annonce
    ADD CONSTRAINT fk_annonce_categorie FOREIGN KEY (idcategorie)
    REFERENCES public.categorie (idcategorie) MATCH SIMPLE
    ON UPDATE NO ACTION
    ON DELETE NO ACTION;


ALTER TABLE IF EXISTS public.annonce
    ADD CONSTRAINT fk_annonce_modele FOREIGN KEY (idmodele)
    REFERENCES public.modele (idmodele) MATCH SIMPLE
    ON UPDATE NO ACTION
    ON DELETE NO ACTION;


ALTER TABLE IF EXISTS public.annonce
    ADD CONSTRAINT fk_annonce_utilisateurs FOREIGN KEY (id_utilisateur)
    REFERENCES public.utilisateurs (id_utilisateur) MATCH SIMPLE
    ON UPDATE NO ACTION
    ON DELETE NO ACTION;


ALTER TABLE IF EXISTS public.modele
    ADD CONSTRAINT fk_modele_marques FOREIGN KEY (idmarque)
    REFERENCES public.marques (idmarque) MATCH SIMPLE
    ON UPDATE NO ACTION
    ON DELETE NO ACTION;

END;
insert into categorie(nomcategorie) values ('4x4');
insert into modele(nom)
insert into annonce(description,idcategorie,idmodele,id_utilisateur,is_valid)values('         Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                                consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',)


