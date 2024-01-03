<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreTaskRequest;
use App\Http\Requests\UpdateTaskRequest;
use App\Models\Task;
use App\Models\User;
use Inertia\Inertia;

class TaskController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {

    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render('Tasks/Create', [
            "token" => csrf_token(),
        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreTaskRequest $request)
    {
        $task = new Task;
        $task->name = $request->name;
        $task->due_in = $request->due_in;
        $task->priority = $request->priority;
        $task->status = 0;
        $task->user_id = auth()->id();
        $task->save();

        return to_route('dashboard')->with('status', 'Task added successfully.');
    }

    /**
     * Display the specified resource.
     */
    public function show(Task $task)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Task $task)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update($id)
    {
        $task = Task::find($id);
        $task->status = !$task->status;
        $task->save();

        return to_route('dashboard');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy($task)
    {
        Task::find($task)->delete();

        return to_route('dashboard')->with('status', 'Task deleted successfully.');
    }
}
