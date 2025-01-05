import { MigrationInterface, QueryRunner, Table, TableIndex } from "typeorm";

export class CreateItemTable1697424973290 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      "CREATE TABLE `items` (`id` int NOT NULL AUTO_INCREMENT, `name` varchar(255) NOT NULL, `description` varchar(255) NULL, `quantity` bigint NOT NULL, `createdDate` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), `updatedDate` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), `deletedDate` timestamp(6) NULL, INDEX `IDX_ID` (`id`), UNIQUE INDEX `IDX_NAME` (`name`), UNIQUE INDEX `IDX_213736582899b3599acaade2cd` (`name`), PRIMARY KEY (`id`)) ENGINE=InnoDB"
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query("DROP TABLE `items`");
  }
}
