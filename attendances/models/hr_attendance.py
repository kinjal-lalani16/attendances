from odoo import fields, models


class HrAttendance(models.Model):
    _inherit = "hr.employee.base"
    _description = "Attendance"

    # employee_id = fields.Many2one('hr.employee', string="Employee",
    #                               required=True, ondelete='cascade',
    #                               index=True)
    # department_id = fields.Many2one('hr.department', string="Department",
    #                                 related="employee_id.department_id",
    #                                 readonly=True)
