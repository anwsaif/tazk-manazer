import Breadcrumb from '@/Components/Breadcrumb';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import Form from './Form'

export default function Dashboard({ auth }) {
  return (
    <AuthenticatedLayout
      user={auth.user}
      header={<h2 className="text-gray-800 dark:text-gray-200 text-xl font-semibold leading-tight">Dashboard</h2>}
    >
      <Head title="New Task" />
      {/* <Breadcrumb pageName="New Task" /> */}

      <Form />
    </AuthenticatedLayout>
  );
}
