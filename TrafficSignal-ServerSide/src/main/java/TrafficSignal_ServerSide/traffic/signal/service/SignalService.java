package TrafficSignal_ServerSide.traffic.signal.service;

import TrafficSignal_ServerSide.traffic.signal.request.JsonRequest;

public interface SignalService {
    public String getSignal(JsonRequest jsonRequest);
}
