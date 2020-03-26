import {MigrationInterface, QueryRunner} from "typeorm";

export class userLista1585262716553 implements MigrationInterface {
    name = 'userLista1585262716553'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "listas" ("id" SERIAL NOT NULL, "nombre" character varying NOT NULL, "turno" integer NOT NULL, "create_at" TIMESTAMP NOT NULL, "update_at" TIMESTAMP NOT NULL, "user_lista" integer, CONSTRAINT "PK_c473d5240fe22d87076551b4ee2" PRIMARY KEY ("id"))`, undefined);
        await queryRunner.query(`ALTER TABLE "listas" ADD CONSTRAINT "FK_5405549b7d1d09fa75c7486af4d" FOREIGN KEY ("user_lista") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`, undefined);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "listas" DROP CONSTRAINT "FK_5405549b7d1d09fa75c7486af4d"`, undefined);
        await queryRunner.query(`DROP TABLE "listas"`, undefined);
    }

}
