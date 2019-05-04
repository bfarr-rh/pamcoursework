package com.redhat.bfarr.solarvillage.datamodel;

public enum Status {

    NONE("None"),
    APPROVED("Approved"),
    DENIED("Denied"),
    CANCELLED("Cancelled");

    private String value;

    Status(final String value) {
        this.value = value;
    }

    public String value() {
        return value;
    }

    @Override
    public String toString() {
        return this.value();
    }
}
