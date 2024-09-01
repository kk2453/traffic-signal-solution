package TrafficSignal_ServerSide.traffic.signal.service.impl;

import TrafficSignal_ServerSide.traffic.signal.request.JsonRequest;
import TrafficSignal_ServerSide.traffic.signal.service.SignalService;
import org.springframework.stereotype.Service;

@Service
public class SignalServiceImpl implements SignalService {

    @Override
    public String getSignal(JsonRequest jsonRequest) {

        return "green";
    }

}
