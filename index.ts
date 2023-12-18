import { BehaviorSubject } from "rxjs";
import { CombineLatestWithSamples } from "./operators/CombineLatestWithSamples";
import { CombineAllSamples } from "./operators/combineAllSamples";
import { MulticastSubjectSample } from "./subjects/MulticastSubjectSample";
import { SubjectAnotherSubscriber } from "./subjects/SubjectAnotherSubscriber";
import { SubjectSamples } from "./subjects/SubjectSamples";
import { BehaviorSubjectSample } from "./subjects/BehaviorSubjectSample";

// CombineAllSamples.run();
// CombineLatestWithSamples.Run();
// SubjectSamples.Run();
// MulticastSubjectSample.Run();
BehaviorSubjectSample.Run();