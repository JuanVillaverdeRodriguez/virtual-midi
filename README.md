# MIDI Sender

A simple python script to send MIDI messages.

## Prerequisites

- Python 3.x (Tested on 3.13.5)
- [loopMIDI](https://www.tobias-erichsen.de/software/loopmidi.html) - Virtual MIDI port creator
- pip (Python package installer)

## Installation

1. Clone this repository:
```bash
git clone git@github.com:JuanVillaverdeRodriguez/virtual-midi.git
cd virtual-midi
```

2. Create a virtual environment:
```bash
python -m venv venv
```

3. Activate the virtual environment:
- Windows:
```bash
.\venv\Scripts\Activate.ps1
```
- Unix/MacOS:
```bash
source venv/bin/activate
```

4. Install dependencies:
```bash
pip install -r requirements.txt
```

## Configuration

1. Install and run loopMIDI
2. Create a new virtual MIDI port named "LoopMIDI 1"
3. Keep loopMIDI running in the background

## Usage

Run the script with:
```bash
python midi_sender.py
```

The script will send MIDI notes from 60 to 67 (middle C to G).
