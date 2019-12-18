import {MigrationInterface, QueryRunner} from "typeorm";

export class PostTableRenameColumnTitleToName1565255873321 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query('ALTER TABLE post CHANGE `title` `name` varchar(3000)');
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query('ALTER TABLE post CHANGE `name` `title` varchar(3000)'); // reverts things made in "up" method
    }


}
