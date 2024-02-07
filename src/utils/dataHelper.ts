import { IData } from "../interface/IData";

let data: IData[] = [
  {
    id: 1,
    title:
      "Demystifying Text-to-Speech: How Neural Networks Convert Text into Natural Speech",
    description: `Text-to-Speech (TTS) technology has witnessed remarkable advancements in recent years, thanks to the advent of neural network architectures. These sophisticated algorithms have revolutionized the way machines convert text into natural-sounding speech. In this article, we will delve deep into the workings of neural network-based TTS systems, unraveling the intricate process behind generating lifelike speech from plain text.
    Before delving into the neural network aspect, let's first grasp the fundamental principles of traditional TTS systems. These systems typically involve multiple stages, including text preprocessing, linguistic analysis, prosody modeling, and waveform synthesis. While conventional methods provided decent results, they often struggled with naturalness and expressiveness.
    Neural networks have emerged as a game-changer in the field of TTS. Unlike rule-based or statistical approaches, neural networks learn complex patterns directly from data, enabling more natural and human-like speech synthesis. One of the key components of neural TTS systems is the sequence-to-sequence architecture, which maps input text sequences to output speech waveforms.
    At the heart of many neural TTS models lies the sequence-to-sequence (seq2seq) architecture, which comprises an encoder and a decoder network. The encoder processes the input text, encoding it into a fixed-length vector representation. This encoded information is then fed into the decoder, which generates the corresponding speech waveform one timestep at a time.
    Training a neural TTS model involves feeding it with pairs of text and corresponding speech data. Through the process of supervised learning, the model learns to mimic the characteristics of human speech, such as intonation, rhythm, and emphasis. Training data augmentation techniques, such as data synthesis and domain adaptation, further enhance the robustness and generalization of the model.
    While early neural TTS systems showed promising results, they often lacked naturalness and expressiveness. To address this, researchers have explored various techniques, including attention mechanisms, prosody prediction, and neural vocoders. These advancements have significantly improved the quality and realism of synthesized speech, making it increasingly difficult to distinguish from human speech.
    Despite the impressive progress in neural TTS, several challenges remain. These include addressing issues such as speaker variability, emotion modeling, and context awareness. Future research directions may involve incorporating multimodal information, leveraging unsupervised learning techniques, and exploring neuro-symbolic approaches to TTS.
    In conclusion, neural networks have transformed the landscape of Text-to-Speech technology, enabling machines to generate lifelike speech from plain text with unprecedented accuracy and naturalness. By understanding the underlying principles and mechanisms of neural TTS systems, we can unlock new possibilities for communication, accessibility, and human-machine interaction. As research in this field continues to evolve, we can expect even more remarkable advancements in the quest to bridge the gap between machines and humans through speech synthesis.`,
    name: "Eric Viscoff",
    date: "May 22, 2023",
    code: `import pyttsx3

    def text_to_speech(text):
        # Initialize TTS engine
        engine = pyttsx3.init()
    
        # Set properties (optional)
        engine.setProperty('rate', 150)  # Speed of speech
        engine.setProperty('volume', 0.9)  # Volume level
    
        # Convert text to speech
        engine.say(text)
        engine.runAndWait()
    
    if __name__ == "__main__":
        # Input text to be converted to speech
        input_text = "Hello, world! This is a dummy text-to-speech program."
    
        # Convert text to speech
        text_to_speech(input_text)
    
      `,
    aboutTheAuthor:
      "Eric Viscoff is a seasoned data scientist, renowned for his expertise in machine learning and predictive analytics. With a background in statistics and computer science, Eric excels in developing innovative solutions to complex problems. His passion for data-driven insights drives him to continuously push the boundaries of AI and drive impactful change.",
    category: "Text-To-Speech",
    link: "https://storage.googleapis.com/kagglesdsdata/datasets/829978/1417968/harvard.wav?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=databundle-worker-v2%40kaggle-161607.iam.gserviceaccount.com%2F20240206%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20240206T042454Z&X-Goog-Expires=345600&X-Goog-SignedHeaders=host&X-Goog-Signature=a237f43036f88387fce9722862c47b22208a4069119a5784952d3d3c0ad05892535af082b31d8f4209834ec84962ec05c4ea2d87c51fcf9391cde42b6db9e83122cbc9cdc1ae51e955dc6667919b0a45517a907439829470df5938f301aad7450dc1bb66d75bbf5784b9f11f52bc919bc8cab648d8e6848b8614152248921603e4bb5e4c940c7cb2e903fe3f9eb48268f603fed54b63684199cc26305372a9ec937d5fdba9ef3fac18e9d3ee7f914c1c8a46d815bc4ac8c808957a7bf97d8c9c3a75a4811c393baefc09826774168dd831fe9a961440e6f1b86a1d8985e0db1cc9aae4e930d10013d1e826dcf0326b6278c022cf9f761a8521b58e739e157f36",
  },
  {
    id: 2,
    title:
      "Automatic Subtitling: How Video-to-Text Models Revolutionize Content Accessibility",
    description: `In today's digital era, video content dominates the online landscape, offering a rich and immersive experience across various platforms. However, for individuals with hearing impairments or those who speak different languages, accessing video content can be challenging. Automatic subtitling, powered by advanced Video-to-Text models, emerges as a transformative solution to address these accessibility barriers.

    Video-to-Text models leverage cutting-edge machine learning techniques, such as deep neural networks, to transcribe spoken words from video/audio streams into textual formats. By analyzing audiovisual data, these models can accurately extract dialogue, narration, and other spoken content from videos, enabling the creation of synchronized subtitles in real-time.
    
    The impact of automatic subtitling extends far beyond mere convenience. For individuals with hearing impairments, subtitles provide vital access to audio content, facilitating comprehension and engagement with videos that would otherwise be inaccessible. Additionally, automatic subtitling enhances the viewing experience for non-native speakers, enabling them to enjoy content in their preferred language without relying on dubbing or manual translation.
    
    Furthermore, the implementation of automatic subtitling promotes inclusivity and diversity in digital media by ensuring that content is accessible to a broader audience, regardless of linguistic or auditory limitations. Content creators and platform providers can leverage Video-to-Text models to generate accurate subtitles efficiently, making their videos more inclusive and reaching a wider audience.
    
    Moreover, automatic subtitling offers practical benefits for content creators and distributors. By automating the subtitling process, they can significantly reduce the time and resources required to make their content accessible, streamlining workflows and increasing efficiency. Additionally, automatic subtitling enables rapid scalability, allowing for the seamless integration of subtitles across a vast library of videos.
    
    As technology continues to advance, we can expect further innovations in automatic subtitling, leading to even more accurate, efficient, and customizable solutions. From improved speech recognition algorithms to enhanced language support and real-time translation capabilities, Video-to-Text models are poised to revolutionize content accessibility on a global scale.
    
    In conclusion, automatic subtitling powered by Video-to-Text models represents a groundbreaking advancement in content accessibility, breaking down barriers and fostering inclusivity in the digital landscape. By harnessing the power of machine learning and artificial intelligence, we can create a more inclusive and accessible media environment, where everyone has the opportunity to engage with video content, regardless of language or hearing abilities.`,
    name: "Eric Viscoff",
    date: "Sep 20, 2023",
    code: `from google.cloud import speech_v1p1beta1 as speech
    import io
    from moviepy.editor import VideoFileClip
    
    def transcribe_video(video_path):
        # Initialize Speech-to-Text client
        client = speech.SpeechClient()
    
        # Load video file
        video = VideoFileClip(video_path)
    
        # Extract audio from video
        audio = video.audio
    
        # Convert audio to bytes
        audio_bytes = io.BytesIO()
        audio.write_audiofile(audio_bytes)
        audio_bytes.seek(0)
    
        # Configure audio settings
        audio_config = speech.RecognitionConfig(
            encoding=speech.RecognitionConfig.AudioEncoding.LINEAR16,
            language_code="en-US",
            audio_channel_count=2 if audio.nchannels == 2 else 1  # Check for stereo audio
        )
    
        # Perform speech recognition
        response = client.recognize(
            audio_config=audio_config,
            audio={"content": audio_bytes.read()}
        )
    
        # Extract transcript from response
        transcript = ""
        for result in response.results:
            transcript += result.alternatives[0].transcript + " "
    
        return transcript
    
    if __name__ == "__main__":
        # Path to the video file
        video_path = "your_video.mp4"
    
        # Perform automatic subtitling
        transcript = transcribe_video(video_path)
    
        # Output the transcript
        print("Transcript:")
        print(transcript)
    
      `,
    aboutTheAuthor:
      "Eric Viscoff is a seasoned data scientist, renowned for his expertise in machine learning and predictive analytics. With a background in statistics and computer science, Eric excels in developing innovative solutions to complex problems. His passion for data-driven insights drives him to continuously push the boundaries of AI and drive impactful change.",
    category: "Video To Text",
    link: "https://www.lipsum.com/",
  },
  {
    id: 3,
    title: "The Future of TTS: Advancements in Expressiveness and Realism",
    description: `In the ever-evolving landscape of Text-to-Speech (TTS), future advancements promise unprecedented levels of expressiveness and realism. Innovations in neural network architectures are poised to revolutionize TTS systems, enabling them to capture subtle nuances of human speech with remarkable fidelity. Techniques such as prosody modeling, emotional synthesis, and speaker adaptation hold the key to creating voices that not only convey information but also evoke genuine emotional responses. Moreover, the integration of multimodal inputs, such as facial expressions and gestures, opens up new avenues for enhancing the naturalness and contextual understanding of synthesized speech. As research progresses, the future of TTS holds immense potential to redefine human-machine interaction and communication.`,
    name: "Shawn Sharma",
    date: "May 18, 2023",
    code: `from gtts import gTTS
    import os
    
    def text_to_speech(text, output_file="output.mp3"):
        tts = gTTS(text=text, lang='en')
        tts.save(output_file)
        os.system(f"start {output_file}")  # Opens the output file using the default system player
    
    if __name__ == "__main__":
        input_text = "Hello, world! This is a dummy text-to-speech program."
        text_to_speech(input_text)
    
      `,
    aboutTheAuthor:
      "Shawn Sharma is a dynamic machine learning enthusiast, dedicated to pushing the boundaries of artificial intelligence. With a background in computer science and a passion for innovation, Shawn specializes in deep learning and natural language processing. Through his research and projects, he aims to harness AI's potential for societal impact and advancement.",
    category: "Text-To-Speech",
    link: "https://storage.googleapis.com/kagglesdsdata/datasets/829978/1417968/harvard.wav?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=databundle-worker-v2%40kaggle-161607.iam.gserviceaccount.com%2F20240206%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20240206T042454Z&X-Goog-Expires=345600&X-Goog-SignedHeaders=host&X-Goog-Signature=a237f43036f88387fce9722862c47b22208a4069119a5784952d3d3c0ad05892535af082b31d8f4209834ec84962ec05c4ea2d87c51fcf9391cde42b6db9e83122cbc9cdc1ae51e955dc6667919b0a45517a907439829470df5938f301aad7450dc1bb66d75bbf5784b9f11f52bc919bc8cab648d8e6848b8614152248921603e4bb5e4c940c7cb2e903fe3f9eb48268f603fed54b63684199cc26305372a9ec937d5fdba9ef3fac18e9d3ee7f914c1c8a46d815bc4ac8c808957a7bf97d8c9c3a75a4811c393baefc09826774168dd831fe9a961440e6f1b86a1d8985e0db1cc9aae4e930d10013d1e826dcf0326b6278c022cf9f761a8521b58e739e157f36",
  },
  {
    id: 4,
    title:
      "A Comprehensive Guide to Natural Language Understanding: Key Concepts and Models",
    description: `Natural Language Understanding (NLU) is crucial in enabling machines to comprehend and interpret human language. It involves processing and analyzing language to extract meaning, intent, and context. Fundamental components include syntactic analysis, semantic parsing, entity recognition, sentiment analysis, and discourse understanding.

    Semantic representations, such as word embeddings and knowledge graphs, capture language semantics in structured formats. Knowledge graphs organize semantic information, facilitating sophisticated NLU.
    
    Supervised learning algorithms, including deep neural networks and recurrent neural networks, power NLU tasks. Transformers, like BERT and GPT, revolutionize NLU with self-attention mechanisms and pre-training on vast text corpora.
    
    Multimodal NLU integrates text, images, and audio, enabling context-aware understanding and response generation.
    
    NLU applications span virtual assistants, sentiment analysis, machine translation, and more, enhancing human-computer interaction and knowledge discovery.
    
    Addressing ambiguity, context-dependency, and cultural nuances requires advancements in commonsense reasoning, explainable AI, and domain adaptation. Future research may explore neuro-symbolic approaches and enhance multimodal NLU capabilities.`,
    name: "Ram Xin",
    date: "Jan 21, 2024",
    code: `# Program to generate a random number between 0 and 9
    
      # importing the random module\n
      import random\n
      \n
      print(random.randint(0,9))
      `,
    aboutTheAuthor:
      "Dr. Ram Xin, a renowned machine learning scientist with a Ph.D. from MIT, specializes in deep learning and computer vision. His pioneering research in image recognition and reinforcement learning has earned widespread acclaim. Committed to mentorship, he inspires the next generation of AI innovators, driving advancements in ethical AI technologies.",
    category: "Natural Language Processing",
    link: "https://storage.googleapis.com/kagglesdsdata/datasets/829978/1417968/harvard.wav?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=databundle-worker-v2%40kaggle-161607.iam.gserviceaccount.com%2F20240206%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20240206T042454Z&X-Goog-Expires=345600&X-Goog-SignedHeaders=host&X-Goog-Signature=a237f43036f88387fce9722862c47b22208a4069119a5784952d3d3c0ad05892535af082b31d8f4209834ec84962ec05c4ea2d87c51fcf9391cde42b6db9e83122cbc9cdc1ae51e955dc6667919b0a45517a907439829470df5938f301aad7450dc1bb66d75bbf5784b9f11f52bc919bc8cab648d8e6848b8614152248921603e4bb5e4c940c7cb2e903fe3f9eb48268f603fed54b63684199cc26305372a9ec937d5fdba9ef3fac18e9d3ee7f914c1c8a46d815bc4ac8c808957a7bf97d8c9c3a75a4811c393baefc09826774168dd831fe9a961440e6f1b86a1d8985e0db1cc9aae4e930d10013d1e826dcf0326b6278c022cf9f761a8521b58e739e157f36",
  },
];

export const getData = () => {
  let item = localStorage.getItem("atlanData");
  if (item != null) return JSON.parse(item);
  localStorage.setItem("atlanData", JSON.stringify(data));
  return data;
};
export const getFavouriteData = () => {
  let item = localStorage.getItem("atlanData");
  if (item != null) return JSON.parse(item).slice(2);
  return data.slice(2);
};

export const getDataById = (id: number) => {
  return data.filter((item) => item.id == id)[0];
};
const getDate = (): string => {
  const currentDate = new Date();
  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const day = currentDate.getDate();
  const monthIndex = currentDate.getMonth();
  const year = currentDate.getFullYear();
  const formattedDate = `${day} ${monthNames[monthIndex]}, ${year}`;
  return formattedDate;
};
export const addEntry = (
  title: string,
  description: string,
  codeSample: string,
  author: string,
  aboutTheAuthor: string,
  selectedOption: string
) => {
  let localData = localStorage.getItem("atlanData");
  if (localData != null) {
    let item = JSON.parse(localData);
    item.push({
      id: item.length + 1,
      title,
      description,
      codeSample,
      name: author,
      aboutTheAuthor,
      category: selectedOption,
      date: getDate(),
    });
    localStorage.setItem("atlanData", JSON.stringify(item));
    console.log(item);
  }
};
