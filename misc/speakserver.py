import subprocess
import serial

term_seq = '213p'

while True:
	ser = serial.Serial(0)
	print ser.portstr
	ser.write("ready")
	has_terminated = False
	saytext = ''
	while not has_terminated:
		saytext += ser.read()
		if saytext[-len(term_seq):] == term_seq:
			has_terminated = True
			saytext = saytext[:-len(term_seq)]
	ser.close()
	subprocess.call(['say', saytext])
