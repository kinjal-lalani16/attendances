odoo.define('attendance.hr_my_attendances', function(require){
"use strict";

    var AbstractAction = require('web.AbstractAction');
    var core = require('web.core');
    var field_utils = require('web.field_utils');
    var HrAttendance = require('hr_attendance.my_attendances');




    HrAttendance.include({
        contentTemplate: 'hellokinjal',

        // events: _.extend({}, HrAttendance.prototype.events, {
        //     'click .xyz': '_onSyncCalendar',
        // }),


        // _onSyncCalendar: function(){
        //     var self = this;
        //     this.do_action({
        //         name: "Employee",
        //         res_model: 'hr.employee',
        //         res_id: this.employee.id,
        //         views: [ [false, 'form']],
        //         type: 'ir.actions.act_window',
        //         view_type: "form",
        //         view_mode: "form",
        //     });
        // },


        events: _.extend({}, HrAttendance.prototype.events, {
            'click .xyz': 'Aformview',
        }),

        Aformview: function () {
            this.do_action({
                name: "Employee",
                res_model: 'hr.employee',
                res_id: this.employee.id,
                views: [ [false, 'form']],
                type: 'ir.actions.act_window',
                view_type: "form",
                view_mode: "form",
            });
        },

        willStart: function () {
        var self = this
        var def = this._rpc({
                model: 'hr.employee',
                method: 'search_read',
                args: [[['user_id', '=', this.getSession().uid]], ['attendance_state','department_id', 'name', 'hours_today']],
            })
            .then(function (res) {
                // console.log('self_id',self.id)
                self.employee = res.length && res[0];
                if (res.length) {
                    self.hours_today = field_utils.format.float_time(self.employee.hours_today);
                }
            });

        return Promise.all([def, this._super.apply(this, arguments)]);
    },

    });
});
