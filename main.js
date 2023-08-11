const url = 'https://jsonplaceholder.typicode.com/todos';

const taskList = document.getElementById('task-list');

async function fetchTasks() {
	try {
		const response = await fetch(url);
		const tasks = await response.json();
		console.log(tasks);

		tasks.forEach(task => {
			const taskItem = document.createElement('li');
			taskItem.textContent = task.title;
			taskList.appendChild(taskItem);
		});
	} catch (error) {
		console.error(
			`Une erreur s'est produite lors de la récupération des tâches : ${error}`
		);
	}
}

fetchTasks();
