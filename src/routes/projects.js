import { Router } from 'express';
const router = Router();

import { createProject, getProjects, getProjectsById, deletProject, updateProject } from '../controllers/projects.controller'

// /api/projects/
router.post('/', createProject);
router.get('/', getProjects);

// /api/projects/:projectId
router.get('/:id', getProjectsById);
router.delete('/:id', deletProject);
router.put('/:id', updateProject);

export default router;