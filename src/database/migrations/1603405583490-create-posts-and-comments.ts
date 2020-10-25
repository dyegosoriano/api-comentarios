import { MigrationInterface, QueryRunner } from 'typeorm'

export class createPostsAndComments1603405583490 implements MigrationInterface {
  name = 'createPostsAndComments1603405583490'

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "posts" ("id" SERIAL NOT NULL, "message" character varying(280) NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_2829ac61eff60fcec60d7274b9e" PRIMARY KEY ("id"))`
    )
    await queryRunner.query(
      `CREATE TABLE "comments" ("id" SERIAL NOT NULL, "comment" character varying(280) NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "postIdId" integer, CONSTRAINT "PK_8bf68bc960f2b69e818bdb90dcb" PRIMARY KEY ("id"))`
    )
    await queryRunner.query(
      `ALTER TABLE "comments" ADD CONSTRAINT "FK_30e6a2e07ef940670d493b759ed" FOREIGN KEY ("postIdId") REFERENCES "posts"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`
    )
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "comments" DROP CONSTRAINT "FK_30e6a2e07ef940670d493b759ed"`
    )
    await queryRunner.query(`DROP TABLE "comments"`)
    await queryRunner.query(`DROP TABLE "posts"`)
  }
}
