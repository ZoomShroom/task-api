import prisma from '../config/db.js';

export async function findAll() {
  return prisma.task.findMany();
}

// Create a new task
export async function create(data) {
  return prisma.task.create({
    data,
  });
}

export async function byId(id){ 
  try{
    const task = await prisma.task.findUnique({where: {id: Number(id)}});

    if(!task){
      const error = new Error('Task Not Found');
      error.status = 404;
      error.body = {error: 'Task not found'}; 
      throw error;
    }

    return task; 
  } catch(error){
    throw error;
  }
}
