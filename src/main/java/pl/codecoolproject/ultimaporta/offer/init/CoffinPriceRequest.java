package pl.codecoolproject.ultimaporta.offer.init;

public class CoffinPriceRequest {
    private String type;
    private String woodType;
    private String size;

    public CoffinPriceRequest(){}

    public CoffinPriceRequest(String type, String woodType, String size) {
        this.type = type;
        this.woodType = woodType;
        this.size = size;

    }

    public String getType() {
        return type;
    }
    public void setType(String type) {
        this.type = type;
    }

    public String getWoodType() {
        return woodType;
    }
    public void setWoodType(String woodType) {
        this.woodType = woodType;
    }

    public String getSize() {
        return size;
    }
    public void setSize(String size) {
        this.size = size;
    }

}
