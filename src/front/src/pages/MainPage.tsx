import Layout from "@/components/midi-sender/Layout";
import TopBar from "@/components/midi-sender/TopBar";

import { Button } from "@/components/ui/button"
import {
    Select,
    SelectContent,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { Card, CardContent } from "@/components/ui/card"

export default function MainPage() {

    return (
        <Layout topBar={<TopBar />} body={
            <div className="grid grid-cols-[2fr,1fr] gap-6 -webkit-app-region-no-drag">
                <div className="space-y-6">
                    <div>
                        <h2 className="text-lg font-semibold mb-4">Selected MIDI Port</h2>
                        <Select>
                            <SelectTrigger>
                                <SelectValue placeholder="Select a MIDI port" />
                            </SelectTrigger>
                            <SelectContent>
                                {/* Add MIDI ports here */}
                            </SelectContent>
                        </Select>
                    </div>

                    <div>
                        <h2 className="text-lg font-semibold mb-4">Available Devices</h2>
                        <div className="space-y-3">
                            {[1, 2, 3].map((device) => (
                                <Card key={device}>
                                    <CardContent className="flex items-center p-4">
                                        <SpeakerIcon className="h-5 w-5 mr-3" />
                                        <div>
                                            <div className="font-medium">Device {device}</div>
                                            <div className="text-sm text-gray-500">Virtual MIDI Device {device}</div>
                                        </div>
                                    </CardContent>
                                </Card>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="space-y-3">
                    <Button className="w-full justify-start" variant="ghost">
                        <WaveformIcon className="mr-2 h-5 w-5" />
                        MIDI Signal Configuration
                    </Button>
                    <Button className="w-full justify-start" variant="ghost">
                        <GamepadIcon className="mr-2 h-5 w-5" />
                        Physical Controller Mapping
                    </Button>
                    <Button className="w-full justify-start" variant="ghost">
                        <UsbIcon className="mr-2 h-5 w-5" />
                        Port Management
                    </Button>
                    <Button className="w-full justify-start" variant="ghost">
                        <SettingsIcon className="mr-2 h-5 w-5" />
                        Settings/Preferences
                    </Button>
                    <Button className="mt-6">
                        Manage Ports
                    </Button>
                </div>
            </div>

        } />
    );
}

const SettingsIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        {...props}
    >
        <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z" />
        <circle cx="12" cy="12" r="3" />
    </svg>
)

const SpeakerIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        {...props}
    >
        <rect width="16" height="20" x="4" y="2" rx="2" ry="2" />
        <circle cx="12" cy="14" r="4" />
        <line x1="12" x2="12" y1="6" y2="6" />
    </svg>
)

const WaveformIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        {...props}
    >
        <path d="M3 12h4l3-9 3 18 3-9h5" />
    </svg>
)

const GamepadIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        {...props}
    >
        <line x1="6" y1="12" x2="10" y2="12" />
        <line x1="8" y1="10" x2="8" y2="14" />
        <line x1="15" y1="13" x2="15.01" y2="13" />
        <line x1="17" y1="11" x2="17.01" y2="11" />
        <path d="M17 5H7a4 4 0 0 0-4 4v6a4 4 0 0 0 4 4h10a4 4 0 0 0 4-4V9a4 4 0 0 0-4-4Z" />
    </svg>
)

const UsbIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        {...props}
    >
        <circle cx="10" cy="7" r="3" />
        <circle cx="16" cy="15" r="4" />
        <path d="M16 8V4" />
        <path d="M10 7h6" />
        <path d="M16 11v4" />
        <path d="M8 16h8" />
    </svg>
)