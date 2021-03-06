'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Messages', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      type: {
        type: Sequelize.CHAR
      },
      content: {
        type: Sequelize.TEXT
      },
      // chatId: {
      //   type: Sequelize.INTEGER,
      //   onDelete: 'CASCADE',
      //   references: {
      //     model: 'User',
      //     key: 'id'
      //   }
      // },
      senderId:{
        type:Sequelize.INTEGER,
        allowNull: false,
        onDelete: 'CASCADE',
        references: {
          model: 'Users',
          key: 'id'
        }
      },
      chatiId:{
        type:Sequelize.INTEGER,
        onDelete: 'CASCADE',
        references: {
          model: 'ChatInstances',
          key: 'id'
        }
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Messages');
  }
};
