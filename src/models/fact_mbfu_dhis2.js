// definining the table structure
  module.exports = (sequelize, DataTypes) => {
    const fact_mbfu_dhis2_export = sequelize.define("fact_mbfu_dhis2_export", {
      data_element: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: true,
        },
      },
      period: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: true,
        },
      },
      org_unit_uid: {
        type: DataTypes.STRING,
        allowNull: true,
        validate: {
          notEmpty: true,
        },
      },
      COCUID: {
        type: DataTypes.STRING,
        allowNull: true,
        validate: {
          notEmpty: true,
        },
      },
      AOCUID: {
        type: DataTypes.STRING,
        allowNull: true,
        validate: {
          notEmpty: true,
        },
      },
      datavalue: {
        type: DataTypes.INTEGER,
        allowNull: true,
        validate: {
          notEmpty: true,
        },
      },
    });
    fact_mbfu_dhis2_export.removeAttribute('id');
    return fact_mbfu_dhis2_export;
  };