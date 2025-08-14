import mido
import threading
import time

class MidiSender:
    def __init__(self, port_name='LoopMidiPort 1'):
        self.port_name = port_name
        try:
            self.output = mido.open_output(port_name)
        except IOError:
            print(f"No se pudo abrir el puerto '{port_name}'. Asegúrate de que loopMIDI esté abierto y el puerto creado.")
            print(f"Puertos disponibles: {mido.get_output_names()}")
            raise

    def play_note(self, note, velocity=100, duration=0.4, channel=0):
        """Send a note-on message and schedule a note-off after the duration"""
        def task():
            self.output.send(mido.Message('note_on', note=note, velocity=velocity, channel=channel))
            time.sleep(duration)
            self.output.send(mido.Message('note_off', note=note, velocity=0, channel=channel))
        threading.Thread(target=task).start()

    def stop_note(self, note, channel=0):
        """Send a note-off message immediately"""
        self.output.send(mido.Message('note_off', note=note, velocity=0, channel=channel))

    def send_cc(self, controller, value, channel=0):
        """Send a control change message"""
        self.output.send(mido.Message('control_change', control=controller, value=value, channel=channel))

    def get_available_ports(self):
        """Get a list of available MIDI output ports"""
        return mido.get_output_names()

    def close(self):
        """Close the MIDI output port"""
        if hasattr(self, 'output'):
            self.output.close()
