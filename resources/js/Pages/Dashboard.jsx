import Breadcrumb from '@/Components/Breadcrumb';
import Table from '@/Components/Table';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';

export default function Dashboard({ auth, tasks }) {
  return (
    <AuthenticatedLayout
      user={auth.user}
      header={<h2 className="text-gray-800 dark:text-gray-200 text-xl font-semibold leading-tight">Dashboard</h2>}
    >
      <Head title="Dashboard" />
      <Breadcrumb pageName="Task List" />

      <Table tasks={tasks} />
    </AuthenticatedLayout>
  );
}
