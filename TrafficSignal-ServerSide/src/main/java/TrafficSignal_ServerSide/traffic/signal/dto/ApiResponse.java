package TrafficSignal_ServerSide.traffic.signal.dto;

import lombok.*;

@AllArgsConstructor
@NoArgsConstructor
@Builder
@Getter
@Setter
@Data
public class ApiResponse {
    private String signalColor;
    private String responseMessage;
    private String responseCode;
}
