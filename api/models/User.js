/**
 * User.js
 *
 * @description :: A model definition.  Represents a database table/collection/etc.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {

    name : {
      type: 'string',
      required: true
    }, 
    last_name : {
      type: 'string',
      required: true
    },
    identification : {
      type: 'string',
      required: true
    },
    email : {
      type: 'string',
      unique: true,
      required: true
    },
    type : {
      type: 'string',
      isIn: ["TEACHER", "STUDENT", "ADMIN"], // TODO cambiar a constantes
      required: true
    },
    grade : {
      type: 'string',
      isIn: ["k2", "k3", "k4", "T", "1A", "1B", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11"], // TODO cambiar a constantes
      allowNull: true
    }
    //  ╔═╗╦═╗╦╔╦╗╦╔╦╗╦╦  ╦╔═╗╔═╗
    //  ╠═╝╠╦╝║║║║║ ║ ║╚╗╔╝║╣ ╚═╗
    //  ╩  ╩╚═╩╩ ╩╩ ╩ ╩ ╚╝ ╚═╝╚═╝


    //  ╔═╗╔╦╗╔╗ ╔═╗╔╦╗╔═╗
    //  ║╣ ║║║╠╩╗║╣  ║║╚═╗
    //  ╚═╝╩ ╩╚═╝╚═╝═╩╝╚═╝


    //  ╔═╗╔═╗╔═╗╔═╗╔═╗╦╔═╗╔╦╗╦╔═╗╔╗╔╔═╗
    //  ╠═╣╚═╗╚═╗║ ║║  ║╠═╣ ║ ║║ ║║║║╚═╗
    //  ╩ ╩╚═╝╚═╝╚═╝╚═╝╩╩ ╩ ╩ ╩╚═╝╝╚╝╚═╝

  },

};

