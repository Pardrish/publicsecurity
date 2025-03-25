
import PageTransition from "@/components/PageTransition";
import ReportForm from "@/components/ReportForm";

const Report = () => {
  return (
    <PageTransition>
      <div className="pt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">Report a Safety Concern</h1>
          <p className="text-lg text-gray-600 mb-12 max-w-3xl">
            Help make your community safer by reporting incidents, suspicious activities, or safety concerns. All reports are confidential and will be reviewed by our team.
          </p>
        </div>
        <ReportForm />
      </div>
    </PageTransition>
  );
};

export default Report;
