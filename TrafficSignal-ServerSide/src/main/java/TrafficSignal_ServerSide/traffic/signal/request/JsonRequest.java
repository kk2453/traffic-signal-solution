package TrafficSignal_ServerSide.traffic.signal.request;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.time.LocalDateTime;

@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
public class JsonRequest {
    //private LocalDateTime dateTime;
    private String vehicle;
    private String count;
}
