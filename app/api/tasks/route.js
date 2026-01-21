let tasks = []; // in-memory store for now will replace with DB later

export async function GET() {
  return Response.json(tasks);
}

export async function POST(req) {
  const body = await req.json();

  const newTask = {
    id: crypto.randomUUID(),
    title: body.title,
    completed: false,
    createdAt: new Date().toISOString(),
  };

  tasks.push(newTask);

  return Response.json(newTask, { status: 201 });
}

export async function PATCH(req) {
  const { searchParams } = new URL(req.url);
  const id = searchParams.get("id");

  tasks = tasks.map((task) =>
    task.id === id ? { ...task, completed: !task.completed } : task
  );

  return Response.json({ success: true });
}

export async function DELETE(req) {
  const { searchParams } = new URL(req.url);
  const id = searchParams.get("id");

  tasks = tasks.filter((task) => task.id !== id);

  return Response.json({ success: true });
}
