import { Stack } from "@mantine/core";
import { TextEditor } from "../components/text-editor";
import { AudioRecorder } from "../components/audio-recorder";
import { useAudioRecorder } from "react-audio-voice-recorder";

export const CurrentNotePage = () => {
  const recorderControls = useAudioRecorder();

  const getAudioState = () => {
    return { recordingTime: recorderControls.recordingTime };
  };

  return (
    <Stack style={{ width: "60%", margin: "0 auto" }}>
      <AudioRecorder recorderControls={recorderControls} />
      <TextEditor getAudioState={getAudioState} />
    </Stack>
  );
};
