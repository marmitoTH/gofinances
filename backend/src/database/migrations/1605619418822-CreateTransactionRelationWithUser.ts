import { MigrationInterface, QueryRunner, TableColumn, TableForeignKey } from "typeorm";

export class CreateTransactionRelationWithUser1605619418822 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.addColumn('transactions', new TableColumn({
      name: 'user_id',
      type: 'int'
    }))

    await queryRunner.createForeignKey('transactions', new TableForeignKey({
      name: 'transaction_user',
      columnNames: ['user_id'],
      referencedColumnNames: ['id'],
      referencedTableName: 'users',
      onDelete: 'CASCADE',
      onUpdate: 'CASCADE'
    }))
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropForeignKey('transactions', 'transaction_user')
    await queryRunner.dropColumn('transactions', 'user_id')
  }
}
