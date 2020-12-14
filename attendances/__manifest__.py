# -*- coding: utf-8 -*-
{
    'name': "Attendances",
    'summary': """Track employee attendance""",
    'description': """Track employee attendance""",
    'author': "Aktiv software",
    'website': "http://www.aktivsoftware.com",
    'category': 'attendance',
    'version': '13.0.1.0.0',
    'depends': ['base', 'hr_attendance','hr'],
    'data': [
        'security/ir.model.access.csv',
        'views/assets.xml',
        # 'views/attendance.xml',
    ],
    'qweb': [
        'static/src/xml/attendance.xml',
    ],
}
