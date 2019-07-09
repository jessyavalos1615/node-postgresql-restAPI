import Sequelize from 'sequelize';
import { sequelize } from '../database/database';

import Tasks from './tasks'

const Project = sequelize.define('projects', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true
    },
    name: {
        type: Sequelize.TEXT
    },
    priority: {
        type: Sequelize.INTEGER
    },
    description: {
        type: Sequelize.TEXT
    },
    deliverydate: {
        type: Sequelize.DATE
    }
}, {
    timestamps: false
});

Project.hasMany(Tasks, { foreingKey: 'projectId', sourceKey: 'id' });
Tasks.belongsTo(Project, { foreingKey: 'projectId', sourceKey: 'id' })

export default Project;