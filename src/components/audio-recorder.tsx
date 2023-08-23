/* eslint-disable @typescript-eslint/ban-ts-comment */
import { AudioRecorder as ReactAudioRecorder } from "react-audio-voice-recorder";

export const AudioRecorder = ({
  recorderControls,
}: {
  recorderControls: unknown;
}) => {
  const addAudioElement = (blob: Blob) => {
    const url = URL.createObjectURL(blob);
    const audio = document.createElement("audio");
    audio.src = url;
    audio.controls = true;
    document.body.appendChild(audio);
  };

  // @ts-ignore
  return (
    <div>
      <ReactAudioRecorder
        onRecordingComplete={(blob: Blob) => addAudioElement(blob)}
        recorderControls={recorderControls}
      />
      {/* @ts-ignore */}
      <button onClick={recorderControls.startRecording}>Start recording</button>
      {/* @ts-ignore */}
      <button onClick={recorderControls.stopRecording}>Stop recording</button>
    </div>
  );
};
