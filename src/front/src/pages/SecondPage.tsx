import Layout from "@/components/midi-sender/Layout";
import TopBar from "@/components/midi-sender/TopBar";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

export default function SecondPage() {
    const navigate = useNavigate();

    return (
        <Layout topBar={<TopBar />} body={
            <div className="p-6">
                <Button variant="ghost" onClick={() => navigate(-1)}>
                    Back to Main Page
                </Button>
                <h2 className="text-xl font-semibold">This is the Second Page</h2>
                <p className="mt-2 text-gray-600">You can navigate back to the main page or explore other features.</p>
            </div>
        } />
    );
}