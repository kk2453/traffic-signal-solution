package TrafficSignal_ServerSide.traffic.signal.controller;

import TrafficSignal_ServerSide.traffic.signal.dto.ApiResponse;
import TrafficSignal_ServerSide.traffic.signal.request.JsonRequest;
import TrafficSignal_ServerSide.traffic.signal.service.SignalService;
import TrafficSignal_ServerSide.traffic.signal.utils.ApiResponseUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/v1")
public class ApiController {

    @Autowired
    private SignalService signalService;

    @GetMapping("/signal")
    public ResponseEntity<ApiResponse> getSignalHandler(@RequestBody JsonRequest jsonRequest){
        String color = signalService.getSignal(jsonRequest);
        ApiResponse response = ApiResponse.builder()
                .signalColor(color)
                .responseMessage(ApiResponseUtils.ACCEPTED)
                .responseCode(ApiResponseUtils.ACCEPTED_CODE)
                .build();
        return new ResponseEntity<>(response, HttpStatus.OK);
    }
}
